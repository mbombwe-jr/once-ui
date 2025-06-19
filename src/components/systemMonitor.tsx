"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

type SystemData = {
  timestamp: string;
  uptime: number;
  cpus: {
    model: string;
    speed: number;
    times: {
      user: number;
      nice: number;
      sys: number;
      idle: number;
      irq: number;
    };
  }[];
  totalmem: number;
  freemem: number;
  memusage: number;
};

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const motionValue = useMotionValue(0);
  const rounded = useRef(0);

  useEffect(() => {
    animate(motionValue, value, {
      duration: 0.6,
      onUpdate: (v: number) => (rounded.current = v),
    });
  }, [value]);

  return (
    <motion.span className="font-mono">
      {motionValue.get().toFixed(1)}
      {suffix}
    </motion.span>
  );
};

const SystemMonitor: React.FC = () => {
  const [data, setData] = useState<SystemData | null>(null);

  useEffect(() => {
    const ws = new WebSocket("wss://childheaded.zoofam.site/sysdata"); // Replace with your server

    ws.onmessage = (event) => {
      try {
        const incoming = JSON.parse(event.data);
        setData(incoming);
      } catch (err) {
        console.error("Invalid JSON:", err);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  if (!data) {
    return <div className="text-center text-gray-500">Waiting for data...</div>;
  }

  const totalMemGB = data.totalmem / (1024 ** 3);
  const freeMemGB = data.freemem / (1024 ** 3);
  const usedMemGB = totalMemGB - freeMemGB;

  const cpuLoad = data.cpus.map((cpu) => {
    const { user, sys, idle, nice } = cpu.times;
    const total = user + sys + idle + nice;
    const active = user + sys + nice;
    return (active / total) * 100;
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">🖥️ System Performance</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-xl bg-gray-50">
          <h3 className="font-semibold text-gray-700">⏱ Uptime</h3>
          <p className="text-2xl">
            <AnimatedNumber value={data.uptime / 3600} suffix=" hrs" />
          </p>
        </div>

        <div className="p-4 border rounded-xl bg-gray-50">
          <h3 className="font-semibold text-gray-700">💾 Memory Usage</h3>
          <p className="text-lg text-gray-600">Used:
            <AnimatedNumber value={usedMemGB} suffix=" GB" /> /
            <AnimatedNumber value={totalMemGB} suffix=" GB" />
          </p>
          <div className="w-full bg-gray-200 h-4 rounded mt-2">
            <motion.div
              className="h-4 bg-blue-500 rounded"
              initial={{ width: 0 }}
              animate={{ width: `${data.memusage}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </div>

      <div className="p-4 border rounded-xl bg-gray-50">
        <h3 className="font-semibold text-gray-700 mb-2">🧠 CPU Usage</h3>
        <div className="space-y-2">
          {cpuLoad.map((usage, i) => (
            <div key={i} className="space-y-1">
              <p className="text-sm text-gray-500">Core {i + 1}</p>
              <div className="w-full bg-gray-200 h-3 rounded">
                <motion.div
                  className="h-3 bg-green-500 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: `${usage.toFixed(1)}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <p className="text-sm text-right text-gray-600">
                <AnimatedNumber value={usage} suffix="%" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemMonitor;
