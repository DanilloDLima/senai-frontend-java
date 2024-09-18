// 1-Com os valores 30,45,150,98,20 utilize uma função para descobrir o máximo e o mínimo
// desses valores;
const valoresUm = [30, 45, 150, 98, 20]
const valoresUmMax = Math.max(...valoresUm)
const valoresUmMin = Math.min(...valoresUm)
alert("--- Atividade 1 ---")
alert(`Os números são: ${valoresUm}`)
alert(`O maior número é: ${valoresUmMax} é o menor número é: ${valoresUmMin}`)

// 2-Com outros valores agora 42,68,14,19,24 utilize uma função para descobrir o máximo e o
// mínimo desses valores;
const valoresDois = [42, 68, 14, 19, 24]
const valoresDoisMax = Math.max(...valoresDois)
const valoresDoisMin = Math.min(...valoresDois)
alert("--- Atividade 2 ---")
alert(`Os números são: ${valoresDois}`)
alert(`O maior número é: ${Math.max(valoresDoisMax)} é o menor número é: ${Math.min(valoresDoisMin)}`)

// 3-Agora crie uma função que arredondará para baixo os valores 15.28, 22.8, 28.36, 5.4;
const valoresTres = [15.28, 22.8, 28.36, 5.4]
const valoresTresArredondados = valoresTres.map(valor => Math.floor(valor))
alert("--- Atividade 3 ---")
alert(`Os números: ${valoresTres.join(', ')} arredondados para baixo: ${valoresTresArredondados.join(', ')}`)

// 4-Agora crie uma função que arredondará para cima os valores 12.28, 6.6, 30.6, 50.84;
const valoresQuatro = [12.28, 6.6, 30.6, 50.84]
const valoresQuatroArredondados = valoresQuatro.map(valor => Math.ceil(valor))
alert("--- Atividade 4 ---")
alert(`Os números: ${valoresQuatro.join(', ')} arredondados para cima: ${valoresQuatroArredondados.join(', ')}`)

// 5- Agora crie uma função que arredondará para baixo os valores 44.16, 8.19, 9.47, 62.33;
const valoresCinco = [44.16, 8.19, 9.47, 62.33]
const valoresCincoArredondados = valoresCinco.map(valor => Math.floor(valor))
alert("--- Atividade 5 ---")
alert(`Os números: ${valoresCinco.join(', ')} arredondados para baixo: ${valoresCincoArredondados.join(', ')}`)