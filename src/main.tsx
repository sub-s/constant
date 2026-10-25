// 전역 스타일을 컴포넌트보다 먼저 불러와야 컴포넌트별 여백/레이아웃 스타일이 덮어쓰이지 않는다
import '@/styles/variables.scss'
import '@/styles/global.scss'
import App from '@/App'
import { useThemeStore } from '@/stores/useThemeStore'
import { MotionConfig } from 'motion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// 첫 페인트 전에 테마를 적용해 깜빡임(FOUC)을 방지
useThemeStore.getState().initTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 시스템의 '동작 줄이기' 설정을 모든 모션에 일괄 적용 */}
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </MotionConfig>
  </React.StrictMode>,
)
