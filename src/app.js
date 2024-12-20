import { Router } from 'itty-router';
import { json } from 'itty-router-extras';

const router = Router();

// 在这里定义你的消息数组或数据库连接
let messages = [];

// 获取所有消息
router.get('/api/messages', () => {
  const response = json(messages);
  response.headers.set('Access-Control-Allow-Origin', '*'); // 添加 CORS 头部
  return response;
});

// 添加新消息
router.post('/api/messages', async (request) => {
  const { text, date } = await request.json();
  messages.push({ text, date });
  const response = json({ message: 'Message added successfully' });
  response.headers.set('Access-Control-Allow-Origin', '*'); // 添加 CORS 头部
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
  response.headers.set('Access-Control-Allow-Origin', '*'); // 添加 CORS 头部
  return response;
});

// 处理所有请求
addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request));
});