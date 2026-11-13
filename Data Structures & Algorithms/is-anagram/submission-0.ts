class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean { if (s.length !== t.length) return false;

  const count = new Map<string, number>();

  for (const c of s) {
    const cur = count.get(c) ?? 0;   
    count.set(c, cur + 1);
  }

  for (const c of t) {
    const cur = count.get(c) ?? 0;
    if (cur === 0) return false;     
    count.set(c, cur - 1);
  }

  return true;}
}
