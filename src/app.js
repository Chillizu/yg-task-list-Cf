import { Router } from 'itty-router';
import { json } from 'itty-router-extras';

const router = Router();

// 在这里定义你的消息数组或数据库连接
let messages = [];

// 获取所有消息
router.get('/api/messages', () => {
  const response = json(messages);
  // 添加 CORS 头部
  response.headers.set('Access-Control-Allow-Origin', 'https://yg-task-list-cf.pages.dev'); // 替换为你允许的源
  return response;
});

// 添加新消息
router.post('/api/messages', async (request) => {
  const { text, date } = await request.json();
  messages.push({ text, date });
  const response = json({ message: 'Message added successfully' });
  // 添加 CORS 头部
  response.headers.set('Access-Control-Allow-Origin', 'https://yg-task-list-cf.pages.dev'); // 替换为你允许的源
  return response;
});

// 删除消息
router.delete('/api/messages/:index', ({ params }) => {
  const index = parseInt(params.index, 10);
  let response;
  if (index >= 0 && index < messages.length) {
    messages.splice(index, 1);
    response = json({ message: 'Message deleted successfully' });
  } else {
    response = json({ error: 'Invalid index' }, { status: 400 });
  }
  // 添加 CORS 头部
  response.headers.set('Access-Control-Allow-Origin', 'https://yg-task-list-cf.pages.dev'); // 替换为你允许的源
  return response;
});

// 处理预检请求 (OPTIONS)
router.options('/api/messages', () => {
  const response = new Response(null, { status: 204 });
  // 添加 CORS 头部
  response.headers.set('Access-Control-Allow-Origin', 'https://yg-task-list-cf.pages.dev'); // 替换为你允许的源
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS'); // 允许的HTTP方法
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type'); // 允许的自定义头部
  return response;
});

// 处理所有请求
addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request));
});