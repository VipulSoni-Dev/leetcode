function longestValidParentheses(s) {
  const st = [-1];
  let best = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      st.push(i);
    } else {
      st.pop();
      if (st.length === 0) {
        st.push(i);         // reset base
      } else {
        best = Math.max(best, i - st[st.length - 1]);
      }
    }
  }
  return best;
}

console.log(longestValidParentheses("()(()"));