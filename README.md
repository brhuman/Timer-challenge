# Refs & Portals — Home Job Test

Task: Build a small React app with timed challenges (1s, 5s, 10s, 15s). The user tries to stop the timer and sees the result in a modal.

Solution (short): React + Vite app using refs and portals. Key parts:
- `Player` (input with ref and accessible label)
- `TimerChallenger` (start/stop challenge card)
- `ResultModal` (`<dialog>` via `createPortal`, opened via `useImperativeHandle`)

Run:

```bash
npm install
npm run dev
```
