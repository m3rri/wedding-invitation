## 🎉 merry's wedding-invitation-letter 🎈
[![Tech Blog Badge](http://img.shields.io/badge/-Tech%20blog-black?style=flat-square&logo=github&link=https://m3rri.github.io/)](https://m3rri.github.io/)

* Language  
  ![javascript](http://img.shields.io/badge/-javascript_ES6+-F7DF1E?logo=javascript&logoColor=white)
* Library  
  ![reactjs](https://img.shields.io/badge/React_18.2.0-20232A?logo=react&logoColor=61DAFB)
  ![emotion](https://img.shields.io/badge/Emotion_11.9.3-d26ac2?logo=emotion&logoColor=white)
  ![kakaomapsdk](https://img.shields.io/badge/react--kakao--maps--sdk_1.1.1-FEE500?logo=kakao&logoColor=white)
  ![swiper](https://img.shields.io/badge/Swiper_8.3.0-6332F6?logo=Swiper&logoColor=white)
  ![fontawesome](https://img.shields.io/badge/Font_Awesome_6.1.2-339AF0?logo=fontawesome&logoColor=white)
  ![react-device-detect](https://img.shields.io/badge/react--device--detect-2.2.2-brightgreen)
  ![react-copy-to-clipboard](https://img.shields.io/badge/react--copy--to--clipboard-5.1.0-brightgreen)
* CI/CD  
  ![git](https://img.shields.io/badge/git-F05032?logo=git&logoColor=white)
  ![git actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubActions&logoColor=white)
  ![git actions](https://img.shields.io/badge/GitHub_Pages-222222?logo=GitHubPages&logoColor=white)

```jsx
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/wedding-invitation/it-developer"
            element={<Blog />}
            props={{
                blogLink: 'https://m3rri.github.io/blog',
                msg: 'Please come and check out the post with the development story',
                description: 'React, emotion, github actions'
            }}
        />
        <Route path="/wedding-invitation/*"
            element={<Blog />}
            props={{
                msg: 'That can\'t be true..🤔'
            }}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
```
