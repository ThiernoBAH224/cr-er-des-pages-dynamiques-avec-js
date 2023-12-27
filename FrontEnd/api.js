export async function fetchWork() {
    const response = await fetch('http://localhost:5678/api/works/')
    const works = await response.json();
    return works;
}

export async function fetchCategory() {
    const response = await fetch('http://localhost:5678/api/categories/')
    const category = await response.json();
    //console.log(category)
    return category;
}