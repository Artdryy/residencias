// Funcion paraa manejar errores en promesas
// Esta función recibe una promesa y devuelve un array con el resultado o el error
export async function catchError(promise) {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}
