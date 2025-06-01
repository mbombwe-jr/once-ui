export async function fetchData(){
    const res = await fetch('https://childheaded.zoofam.site/transactions')
    const transactiondata = await res.json();
    return transactiondata;
}
