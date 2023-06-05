// daily, weekly and monthly buttons

// Escribo la logica para que los botones daily, weekly y monthly se seleccionen
// al dar click
const dailyBtn = document.querySelector('#daily-btn')
const weeklyBtn = document.querySelector('#weekly-btn')
const monthlyBtn = document.querySelector('#monthly-btn')
const ellipsisBtn = document.querySelector('#ellipsis')

weeklyBtn.classList.add('p-activated')

const mainBnts = [
    dailyBtn,
    weeklyBtn,
    monthlyBtn
]

mainBnts.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('p-activated')) {
            
        } else {
            mainBnts.forEach(btn => {
                if(btn.classList.contains('p-activated')) {
                    btn.classList.remove('p-activated')
                }
            })

            btn.classList.add('p-activated')
        }
    })
})