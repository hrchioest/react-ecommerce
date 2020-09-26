export const convertToMoney = (number) =>
    Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(number)
