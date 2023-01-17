export const getTime = () => {
    let date = new Date(), hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds()
    const hoursFixed = hours < 10 ? '0' + hours : hours,
    minutesFixed = minutes < 10 ? '0' + minutes : minutes,
    secondsFixed = seconds < 10 ? '0' + seconds : seconds

    return [hoursFixed, minutesFixed, secondsFixed]
}

//TODO A BETTER MY AGE WITH TIMESTAMP FOR EXAMPLE 24.98123912138193
export const myAge = () => {
    let birthday = new Date('09/30/1998')
    var difference = Date.now() - birthday.getTime()
    var age_dt = new Date(difference)
    var year = age_dt.getUTCFullYear()
    var age = Math.abs(year - 1970)

    return age
}