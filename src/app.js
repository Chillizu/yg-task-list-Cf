import { Router } from 'itty-router';
import { json } from 'itty-router-extras';

const router = Router();

// 在这里定义你的消息数组或数据库连接
let messages = [];

// 获取所有消息
router.get('/api/messages', () => {
  return json(messages);
});

// 添加新消息
router.post('/api/messages', async (request) => {
  const { text, date } = await request.json();
  messages.push({ text, date });
  return json({ message: 'Message added successfully' });
});

// 删除消息
router.delete('/api/messages/:index', ({ params }) => {
  const index = parseInt(params.index, 10);
  if (index >= 0 && index < messages.length) {
    messages.splice(index, 1);
    return json({ message: 'Message deleted successfully' });
  }
  return json({ error: 'Invalid index' }, { status: 400 });
});

// 处理所有请求
addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request));
});