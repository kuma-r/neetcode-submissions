class Singleton:
    _created = None
    # In python consider this method as the 'getInstance'
    def __new__(cls):
        if cls._created is None:
            cls._created=super(Singleton, cls).__new__(cls)
        return cls._created

    def getValue(self) -> str:
        return self.value
    def setValue(self, value: str):
        self.value=value