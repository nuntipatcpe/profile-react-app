import css from './css.png'
import javascript from './javascript.png'
import html from './html.png'
import java from './java.png'
import react from './react.png'
import redux from './redux.png'
import sass from './sass.png'
import nodeJs from './node-js.png'
import git from './git.png'
import github from './github.png'
import figma from './figma.png'

export const getImg=()=>{
    const imgs = [
        {
          "type": "Language",
          "topic": "Javascript",
          "path": javascript
        },
        {
          "type": "Language",
          "topic": "Css",
          "path": css
        },
        {
          "type": "Language",
          "topic": "HTML",
          "path": html
        },
        {
          "type": "Language",
          "topic": "java",
          "path": java
        },
      
        {
          "type": "Framework&Libery",
          "topic": "React",
          "path": react
        },
      
        {
          "type": "Framework&Libery",
          "topic": "Redux",
          "path": redux
        },
        {
          "type": "Framework&Libery",
          "topic": "Sass",
          "path": sass
        },{
          "type": "Other",
          "topic": "Node",
          "path": nodeJs
        },
        
        {
          "type": "Other",
          "topic": "Git",
          "path": git
        },
        {
          "type": "Other",
          "topic": "Github",
          "path": github
        },
        {
          "type": "Other",
          "topic": "Figma",
          "path": figma
        }
      ]
      
    return imgs;
} 