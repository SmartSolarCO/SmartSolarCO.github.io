import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Replace '<REPO_NAME>' with the name of your GitHub repository.
  // For example, if your repo URL is https://github.com/user/my-app,
  // then base should be '/my-app/'.
  // If you are deploying to a user page (user.github.io), you can set this to '/'.
  base: '/<REPO_NAME>/',
})
