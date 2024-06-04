/*

Korišćenje funkcije Boolean().

Koristi se za eksplicitnu konverziju drugih tipova podataka u Bulovu vrednost

*/


let value1 = Boolean(true)
let value2 = Boolean(false)
let value3 = Boolean(0)
let value4 = Boolean(1)
let value5 = Boolean("")
let value6 = Boolean("Zdravo")
let value7 = Boolean(null)
let value8 = Boolean(undefined)

/*

Funkcija Boolean() vraća tačno za vrednosti koje se smatraju istinitim i netačno za vrednosti koje
se smatraju netačnim. Generalno, ove vrednosti se smatraju lažnim: false, 0, '', null, undefined. NaN

Druge vrednosti se smatraju istinitim

*/