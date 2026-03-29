import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchData } from './restClient';

describe('restClient', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  it('should fetch data successfully', async () => {
    const mockResponse = {
      location: { name: 'London' },
      current: { temp_c: 15 }
    };

    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    } as Response);

    const data = await fetchData({
      endpoint: 'current.json',
      options: { q: 'London' }
    });

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('London'));
    expect(data).toEqual(mockResponse);
  });

  it('should throw an error when the response is not ok', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({ error: { message: 'Not Found' } })
    } as Response);

    await expect(fetchData({ endpoint: 'invalid' })).rejects.toThrow();
  });
});
