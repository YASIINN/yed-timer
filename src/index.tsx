import * as React from 'react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
interface PropTypes {
  minute: Number | String
  second: Number | String
  minuteText?: String
  secondText?: String
  timeUpText?: String
  timerWidth?: Number
  timerHeight?: Number
  resetText?: String
  startText?: String
  stopText?: String
  timeUpColor?: String
}

const YedTimer = (props: PropTypes) => {
  const [minute, setMinute] = useState('00')
  const [second, setSecond] = useState('00')
  const [defaultMinute, setDefaultMinute] = useState('00')
  const [defaultSecond, setDefaultSecond] = useState('00')
  const [start, setStart] = useState(false)
  const [timesUp, setTimesUp] = useState(false)
  const [intervalId, setIntervalId] = useState()
  useEffect(() => {
    let minute = ''
    let second = ''
    if (props.minute < 10) {
      minute = '0' + props.minute
    } else {
      minute = props.minute.toString()
    }
    if (props.second < 10) {
      second = '0' + props.second
    } else {
      second = props.second.toString()
    }
    setDefaultSecond(second)
    setDefaultMinute(minute)
    setMinute(minute)
    setSecond(second)
  }, [])
  const onTimeHandler = () => {
    if (timesUp) {
      setMinute(defaultMinute)
      setSecond(defaultSecond)
    }
    if (start) {
      clearInterval(intervalId)
      setStart(false)
    } else {
      setStart(true)
    }
    setTimesUp(false)
  }
  const onStop = () => {
    setTimesUp(false)
    setStart(false)
    setMinute(defaultMinute)
    setSecond(defaultSecond)
    clearInterval(intervalId)
  }
  // @ts-ignore
  useEffect(() => {
    if (start === true) {
      var intervalId = setInterval(() => {
        if (second === '00') {
          if (+minute > 0) {
            setSecond('59')
            if (+minute <= 10) {
              let m = +minute
              m--
              setMinute('0' + m.toString())
            } else {
              const m = +minute - 1
              setMinute(m.toString())
            }
          } else {
            if (minute === '00') {
              setStart(false)
              setTimesUp(true)
              clearInterval(intervalId)
            }
          }
        } else {
          if (+second <= 10) {
            let s = parseInt(second)
            s = s - 1
            setSecond('0' + s.toString())
          } else {
            const s = +second - 1
            setSecond(s.toString())
          }
        }
      }, 1000)
      // @ts-ignore
      setIntervalId(intervalId)
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [second, start])
  return (
    <div
      className={styles.yedtimerwrapper}
      style={{
        width: props.timerWidth ? props.timerWidth + 'px' : '100%',
        height: props.timerHeight ? props.timerHeight + 'px' : 'auto'
      }}
    >
      <div className={styles.yedinfowrapper}>
        <div className={styles.yedtimer}>
          <div>
            {' '}
            {minute}{' '}
            <em className={styles.yedtimeinfo}>
              {props.minuteText ? props.minuteText : 'Dakika'}
            </em>
          </div>
          <div className={styles.yedtimersecond}>
            {second}
            <em className={styles.yedtimeinfo}>
              {props.secondText ? props.secondText : 'Saniye'}
            </em>
          </div>
        </div>
        {timesUp ? (
          <div className={styles.yedtimesuptext}>
            <em>{props.timeUpText ? props.timeUpText : 'Zaman Doldu.'}</em>
          </div>
        ) : null}
      </div>
      <hr className={styles.yedline} />
      <div className={styles.yedtimerbuttonwrapper}>
        <button
          className={
            styles.yedtimerbutton +
            ' ' +
            (start ? styles.yedbuttonWarning : styles.yedbutonSucces)
          }
          onClick={() => {
            onTimeHandler()
          }}
        >
          {start
            ? props.stopText
              ? props.stopText
              : 'Durdur'
            : props.startText
            ? props.startText
            : 'Başlat'}
        </button>
        <button
          className={styles.yedtimerbutton + ' ' + styles.yedbuttonDanger}
          onClick={() => {
            onStop()
          }}
        >
          {props.resetText ? props.resetText : 'Sıfırla'}
        </button>
      </div>
    </div>
  )
}
export default YedTimer
//
// cd example && npm install && npm run build
