class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        time,fleet=[0 for i in position],[]
        cars=[[position[i],speed[i]] for i in range(len(position))]
        cars.sort()
        for i in range(len(cars)):
          time[i]=(target-cars[i][0])/cars[i][1]
        for i,time in enumerate(time):
          while fleet and fleet[-1]<=time:
            fleet.pop()
          fleet.append(time)
        return len(fleet)