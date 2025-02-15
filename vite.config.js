import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 프로젝트 설정 파일입니다.
// 개발 서버 포트, alias 설정, 플러그인 추가 등이 가능
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 개발 서버 포트 설정
  },
  resolve: {
    alias: {
      '@': '/src', // 절대 경로 alias 설정
    },
  },
})
