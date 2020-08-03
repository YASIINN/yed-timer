# yed-timer

>
>React timer

[![NPM](https://img.shields.io/npm/v/yed-timer.svg)](https://www.npmjs.com/package/yed-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
## Demo
[Demo](https://yasiinn.github.io/yed-timer-demo/)


## Install

```bash
npm install --save yed-timer
```

## Usage

```tsx
import React from 'react'

import  YedTimer from 'yed-timer'
import 'yed-timer/dist/index.css'

const App = () => {
  return <YedTimer minute={40} second={15} />
}

export default App

```

# Props
 Props Name | Description | Default Value | Required | Value Type
 :---:  |  :----: | :---:| :---: | :---:
  minute | Minutes for timer | null | true | Number,String
  second|The title value of the tag input element | null | true | Number,String
  minuteText | Minute text | Dakika | false | String
  secondText | Second text | Saniye | false | String
  timeUpText | Text to show when the timer stops| Zaman Doldu. | false | String
  timerWidth | Timer Width | 100% | false | Number
  timerHeight | Timer Height | auto | false | Number
  resetText | Timer Reset Text | Sıfırla | false | String
  startText | Timer Start Text | Başlat | false | String
  stopText | Timer Stop Text | Durdur | false | String



## License

MIT © [YASIINN](https://github.com/YASIINN)
