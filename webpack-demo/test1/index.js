import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['你好', 'webpack'], ' ');
	element.classList.add('hello');
	
	//添加图片
	var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
	
	console.log(Data);
	
  return element;
}

document.body.appendChild(component());