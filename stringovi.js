/*

U JS string je primitivni tip podataka koji se koristi za predstavljanje tekstualnih vrednosti. String se
sastoji od niza znakova i uvek je okružen jednostrukim ('') ili dvostrukim ("") navodnicima.
Bitne karakteristike

1. Nepromenljivost: Stringovi su nepromenljivi, što znači da se ne mogu menjati takvi kakvi jesu
stvorio. Dakle, svaka operacija koja izgleda kao da menja string zapravo stvara novi string

2. Indeksiranje: Svakom karakteru u stringu se može pristupiti pomoću indeksa. Indeksi o za prvi
znak i uvećani su za 1 za svaki sledeći znak.

3. Length: Svojstvo dužine, koje se koristi za dobijanje dužine stringa, odnosno broja znakova na stranici

*/

let str1 = "Hello World!"
let str2 = "JS je zabavan jezik!"
let str3 = `Stringove mozemo da pravimo i sa back tick`

console.log(str1[0])
console.log(str1[8])
console.log(str1[str1.length - 1])

console.log(str1[22]) // kada pokusamo da pristupimo elementu preko indeksa van okvira niza, vraca undifined

/*
Stringovi u JS-u imaju brojne ugrađene metode za manipulaciju i rad sa njima, kao što su toLoverCase(), toUpperCase(), substring(), split() i mnoge druge.
Kroz takve metode možemo da izvodimo razne operacije nad stringovima, kao što je promena veličine slova, izdvajanje delova, deljenje stringa na podnizove itd.

*/

console.log(str3.toUpperCase())
console.log(str3.substring(0, 6))
console.log(str3.split(" "))