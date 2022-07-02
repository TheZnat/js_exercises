// async/await - работает по верх промисов и позваоляет писать асинхронный код,
// так же как будто мы пишем синхронный
// fetch запрос на получения данных их гита
// const getGitData = async () =>{
//     try {
//         const response = await fetch('https://api.github.com/users/TheZnat')
//         const data  = await response.json()
//         console.log(data)
//     }catch (err){
//         console.log('Error >> ', err)
//     }
// }
// getGitData()

// Асинхронный запрос на получение видео с камеры через async/await
// const getUserVideo = async () => {
//     try {
//         const video = document.querySelector('video')
//         const response = await navigator.mediaDevices.getUserMedia({video: true})
//         video.srcObject = response
//     }catch (err){
//         console.log('Error ',err)
//     }
// }
// getUserVideo()
// запрос черех промисы
// const video = document.querySelector('video')
// const myVideo = navigator.mediaDevices.getUserMedia({video: true})
//     .then(mediaStream => {
//         video.srcObject = mediaStream
//     })
//     .catch(err =>{
//         console.log('Video error >> ', err)
//     })
// console.log(myVideo)


// функция сна через async/await
// function sleep(time){
//     return new Promise(((resolve, reject) => {
//         if(time < 500){
//             reject('Слишком мало сна')
//         }
//
//         setTimeout(() => resolve(`Поспал ${time}`), time)
//     }))
// }
// const sleepSession = async () =>{
//     try {
//         let sleep1 = await sleep(1500)
//         console.log(sleep1)
//         let sleep2 = await sleep(1000)
//         console.log(sleep2)
//         let sleep3 = await sleep(500)
//         console.log(sleep3)
//         let sleep4 = await sleep(200)
//         console.log(sleep4)
//     }catch (err){
//         console.log('Error >>',err)
//     }
// }
// sleepSession()
// функция сна через промисы
// sleep(1500).then(res => {
//     console.log(res)
//     return sleep(1000)
// }).then(res => {
//     console.log(res)
//     return sleep(500)
// }).then(res =>{
//     console.log(res)
//     return sleep(200)
// }).then(res =>{
//     console.log(res)
// }).catch(err =>{
//     console.log('Error >>', err)
// })
