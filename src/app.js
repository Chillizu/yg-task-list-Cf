import { Router } from 'itty-router';
import { json } from 'itty-router-extras';

// 创建一个路由器实例
const router = Router();

// 获取所有消息
router.get('/api/messages', async () => {
  const messages = await MESSAGES.get('messages', { type: 'json' }) || [];
  return json(messages);
});

// 添加新消息
router.post('/api/messages', async (request) => {
  const { text, date } = await request.json();
  const messages = await MESSAGES.get('messages', { type: 'json' }) || [];
  messages.push({ text, date });
  await MESSAGES.put('messages', JSON.stringify(messages));
  return json({ message: 'Message added successfully' });
});

// 删除消息
router.delete('/api/messages/:index', async ({ params }) => {
  const index = parseInt(params.index, 10);
  const messages = await MESSAGES.get('messages', { type: 'json' }) || [];
  if (index >= 0 && index < messages.length) {
    messages.splice(index, 1);
    await MESSAGES.put('messages', JSON.stringify(messages));
    return json({ message: 'Message deleted successfully' });
  }
  return json({ error: 'Invalid index' }, { status: 400 });
});

// 处理所有请求
addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request));
});