/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let diameterOfBinaryTree = function (root) {

    let ans = 0;

    go(root);

    return ans;

    function go(node) {
        if (!node) {
            return 0;
        }

        let left = go(node.left);
        let right = go(node.right);

        ans = Math.max(ans, left + right);

        return 1 + Math.max(left, right);
    }
};



// 계속 파고 들어가서 길이를 재면 되는데
// 재귀를 써서 하는 방법이 있겠어 ㅇㅅㅇ