

    public static void main(String[] args) {
        public int singleNumber(int[] nums) {
            int ans = 0;
            for(int num: nums) {
                ans ^= num;
            }
            return ans;
        }

        singleNumber([4,1,2,1,2])
    }
