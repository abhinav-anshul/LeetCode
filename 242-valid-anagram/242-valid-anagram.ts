function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }

    const map: Record<string, number> = {}

    for (const char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    for (const char of t) {
        if (map[char]) {
            map[char]--
        } else {
            return false
        }
    }

    return true
};