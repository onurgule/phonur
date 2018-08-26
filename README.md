# phonur
Get format of phone number with number and country code.

## Motivation
Dealing with phone numbers is a pain. This package defeat this pain.

## Installation
To install the library use
```sh
$ npm i phonur --save
```


## Usage

~~~~
var phonur = require('phonur')

phonur("+905312345678") // return ['+905312345678', '90', 'TR']
phonur("905312345678") // return ['+905312345678', '90', 'TR']
phonur("05312345678") // return []
phonur("05312345678","90") // return ['+905312345678', '90', 'TR']
phonur("5312345678") // return []
phonur("5312345678","90") // return ['+905312345678', '90', 'TR']
~~~~

## Credits
Onur Osman Gule [onurgule]
