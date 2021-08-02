import { useEffect, useState } from 'react'
import _ from 'lodash'
import '../style.css'


const App = () => {

    const [r, setR] = useState(_.random(0, 255))  //初始化顏色
    const [g, setG] = useState(_.random(0, 255))
    const [b, setB] = useState(_.random(0, 255))
    const [rr, setRR] = useState(_.random(0, 255))
    const [gg, setGG] = useState(_.random(0, 255))
    const [bb, setBB] = useState(_.random(0, 255))
    const [selectedColor, setSelectedColor] = useState(null)

    useEffect(() => {  //僅首次執行
        document.querySelector('.left').style.backgroundColor = `rgb(${r},${g},${b})`
        document.querySelector('.right').style.backgroundColor = `rgb(${rr},${gg},${bb})`
    }, [])

    useEffect(() => {  //每次監看值改變都執行
        document.querySelector('.left').style.backgroundColor = `rgb(${r},${g},${b})`
        document.querySelector('.right').style.backgroundColor = `rgb(${rr},${gg},${bb})`

        if (r === rr && g === gg && b === bb) {  //若顏色相同執行
            alert('Well Done!')
            randomRGB()
        }
    }, [r, g, b, rr, gg, bb])

    const randomRGB = () => {  //所有顏色重新設定
        setR(_.random(0, 255))
        setG(_.random(0, 255))
        setB(_.random(0, 255))
        setRR(_.random(0, 255))
        setGG(_.random(0, 255))
        setBB(_.random(0, 255))
    }

    const handleCount = (number) => {  //計算顏色值是否超出範圍
        const num = Number(number)

        if (selectedColor === 'red') {
            r + num <= 255 && r + num >= 0 ? setR(r + num) : setR(r)
        }
        else if (selectedColor === 'green') {
            g + num <= 255 && g + num >= 0 ? setG(g + num) : setG(g)
        }
        else if (selectedColor === 'blue') {
            b + num <= 255 && b + num >= 0 ? setB(b + num) : setB(b)
        }
    }

    const imgUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMaXZlbGxvIDEiIGlkPSJMaXZlbGxvXzEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZS8+PHBhdGggZD0iTTY0LDBhNjQsNjQsMCwxLDAsNjQsNjRBNjQuMDcsNjQuMDcsMCwwLDAsNjQsMFptMCwxMjJhNTgsNTgsMCwxLDEsNTgtNThBNTguMDcsNTguMDcsMCwwLDEsNjQsMTIyWiIvPjxwYXRoIGQ9Ik04Ny45LDQyLjM2LDUwLjQyLDc5LjIyLDQwLjE3LDY4LjQzYTMsMywwLDAsMC00LjM1LDQuMTNsMTIuMzUsMTNhMywzLDAsMCwwLDIuMTIuOTNoLjA1YTMsMywwLDAsMCwyLjEtLjg2bDM5LjY1LTM5YTMsMywwLDEsMC00LjIxLTQuMjhaIi8+PC9zdmc+'
    const arrow = "M506.134 241.843l-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"

    return (
        <div className='container'>
            <h1>RGB Color Matcher</h1>
            <div className='colorSelect'>
                <div className='block' style={{ backgroundColor: 'red' }} onClick={() => { setSelectedColor('red') }}>
                    {selectedColor === 'red' ? <img className='checked' src={imgUrl} alt='' /> : ''}
                </div>
                <div className='block' style={{ backgroundColor: 'green' }} onClick={() => { setSelectedColor('green') }}>
                    {selectedColor === 'green' ? <img className='checked' src={imgUrl} alt='' /> : ''}
                </div>
                <div className=' block' style={{ backgroundColor: 'blue' }} onClick={() => { setSelectedColor('blue') }}>
                    {selectedColor === 'blue' ? <img className='checked' src={imgUrl} alt='' /> : ''}
                </div>
            </div>
            <div className='count'>
                <button className='btn' onClick={() => { handleCount(-10) }}>-10</button>
                <button className='btn' onClick={() => { handleCount(-5) }}>-5</button>
                <button className='btn' onClick={() => { handleCount(-1) }}>-1</button>
                <button className='btn' onClick={() => { handleCount(1) }}>+1</button>
                <button className='btn' onClick={() => { handleCount(5) }}>+5</button>
                <button className='btn' onClick={() => { handleCount(10) }}>+10</button>
            </div>
            <div className='two-color'>
                <div className='left'>
                    <div className='rgbDisplay'>
                        <p className={`r-text ${r === rr ? 'numberMatch' : ''}`}>{`R: ${r}`}</p>
                        <p className={`g-text ${g === gg ? 'numberMatch' : ''}`}>{`G: ${g}`}</p>
                        <p className={`b-text ${b === bb ? 'numberMatch' : ''}`}>{`B: ${b}`}</p>
                    </div >
                </div>
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 132 512 248">
                    <path d={arrow}></path>
                </svg>
                <div className='right'>
                    <div className='match'>
                        Match This Color!
                    </div >
                </div>
            </div>
        </div >
    )
}

export default App