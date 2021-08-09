export async function get<T>(url: string): Promise<T | undefined> {
    try {
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.error(error)
    }
} 