import asyncio
import asyncpg

async def test_connection():
    conn = await asyncpg.connect(
        user='postgres.schsrrvobjncttgowigs',
        password='avZQr5EZ82IUHfv6',
        database='postgres',
        host='aws-0-us-west-1.pooler.supabase.com',
        port=6543
    )
    print("Connection successful")
    await conn.close()

asyncio.run(test_connection())
