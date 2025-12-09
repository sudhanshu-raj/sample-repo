if [ -z "$1" ]; then
  echo "Usage: $0 <commit>"
  exit 1
fi

COMMIT="$1"

OUTPUT=$(git show "$COMMIT" | cline -y "
Review this commit thoroughly for:

1. Potential bugs
2. Security vulnerabilities
3. Code quality issues
4. Maintainability problems
5. Best practice violations

Provide specific, actionable feedback for every issue found.
Format your response in clear bullet points.
" 2>/dev/null)

echo "$OUTPUT"