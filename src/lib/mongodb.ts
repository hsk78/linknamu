import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// 개발 중 핫 리로드로 연결이 중복 생성되지 않도록 전역에 캐시
export function getClient(): Promise<MongoClient> {
  if (!uri) throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  return global._mongoClientPromise;
}
