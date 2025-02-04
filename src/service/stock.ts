import { axiosInstance } from './axios';
import {
  type GetSymbolStockSearchParam,
  type GetStockMarketIndexResponse,
  type GetSymbolStockRequestConfig,
  type GetSymbolStockResponse,
} from '@/interfaces/Dto/Stock';

/**
 * 주가 지수 조회 API (GET)
 */
export async function getStockMarketIndex() {
  const getStockMarketIndexResponse = await axiosInstance.get<GetStockMarketIndexResponse>('/api/stocks/index');

  return getStockMarketIndexResponse;
}

/**
 * 심볼 주가 조회 API (GET) - 차트
 *
 * `symbol` 심볼 이름 [**string**]
 *
 * `startDate` 시작 날짜 [**string**] - YYYY-MM-DD
 *
 * `startDate` 종료 날짜 [**string**] - YYYY-MM-DD
 *
 * `resampleFreq` 데이터 단위 - `daily` | `weekly` | `monthly` | `annually`
 */
export async function getSymbolStock({
  symbol,
  startDate,
  endDate,
  resampleFreq = 'daily',
}: GetSymbolStockSearchParam) {
  const getSymbolStockResponse = await axiosInstance.get<GetSymbolStockResponse>('/api/stocks', {
    params: {
      symbol,
      startDate,
      endDate,
      resampleFreq,
    },
  } as GetSymbolStockRequestConfig);

  return getSymbolStockResponse;
}
