import json
import sys

PACKAGE_JSON = './client/package.json'

MODE = sys.argv[1] if len(sys.argv) > 1 else ''

with open(PACKAGE_JSON, 'r', encoding='utf-8') as f:
    data = json.load(f)

if MODE == 'add-proxy':
    data['proxy'] = 'http://localhost:5000'
    print('已添加 proxy 字段: http://localhost:5000')
elif MODE == 'remove-proxy':
    if 'proxy' in data:
        del data['proxy']
        print('已移除 proxy 字段')
    else:
        print('proxy 字段本来就不存在')
else:
    print('用法: python switch-proxy.py add-proxy|remove-proxy')
    sys.exit(1)

with open(PACKAGE_JSON, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write('\n')
