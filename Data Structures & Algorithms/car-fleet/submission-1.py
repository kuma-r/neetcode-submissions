class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        a, b = zip(*sorted(zip(position, speed)))
        position = list(a)
        speed = list(b)
        time= [(target-position[i])/speed[i] for i in range(len(position))]
        stack=[]
        for t in time:
            while stack and stack[-1]<=t:
                stack.pop()
            stack.append(t)
        return len(stack)