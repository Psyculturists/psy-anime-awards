from enum import Enum
from abc import ABC

class BaseEnum(Enum):
    def __str__(self) -> str:
        return self.value