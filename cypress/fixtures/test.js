//export const foo = 'ex'

export class timestampclass {

    getTimestamp() {
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day =`${date.getDate()}`.padStart(2, '0');
    const h =`${date.getHours()}`.padStart(2, '0');
    const m =`${date.getMinutes()}`.padStart(2, '0');
    //const s =`${date.getSeconds()}`.padStart(2, '0');
    
    return `${day}${month}${year}${h}${m}`//${s}`
  }
}

export const timestampval = new timestampclass()