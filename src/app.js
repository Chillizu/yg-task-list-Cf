import { Router } from 'itty-router';
import { json } from 'itty-router-extras';

const router = Router();

// 获取所有消息
router.get('/api/messages', () => {
  const response = json(messages);
  response.headers.set('Access-Control-Allow-Origin', 'https://yg-task-list-cf.pages.dev');
  return Promise.resolve(response); // 确保返回 Promise
});

// 添加新消息
router.post('/api/messages', async (request) => {
  const { text, date } = await request.json();
  messages.push({ text, date });
  const response = json({ message: 'Message added successfully' });
  response.headers.set('Access-Control-Allow-Origin', 'https://yg-task-list-cf.pages.dev');
  return Promise.resolve(response); // 确保返回 Promise
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
  response.headers.set('Access-Control-Allow-Origin', 'https://yg-task-list-cf.pages.dev');
  return Promise.resolve(response); // 确保返回 Promise
});

// 处理预检请求 (OPTIONS)
router.options('/api/messages', () => {
  const response = new Response(null, { status: 204 });
  response.headers.set('Access-Control-Allow-Origin', 'https://yg-task-list-cf.pages.dev');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return Promise.resolve(response); // 确保返回 Promise
});

// 添加一个默认的 404 处理
router.all('*', () => {
  return Promise.resolve(new Response('Not Found', { status: 404 }));
});

// 处理所有请求
addEventListener('fetch', (event) => {
  // 确保路由处理返回一个 Promise
  event.respondWith(
    router.handle(event.request)
      .catch(err => {
        return new Response('Server Error', { status: 500 });
      })
  );
});