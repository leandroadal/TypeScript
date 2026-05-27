/**
 * Type enum
 *
 * Permite criar um conjunto de constantes nomeadas.
 *
 * Muito usado para:
 * - status
 * - permissões
 * - categorias
 * - valores fixos
 */

// Se não atribuir valor começa em 0 e a cada variável vai pro proximo numero
enum Colors {
  RED,
  BLUE,
  GREEN,
}

const color: Colors = Colors.BLUE;

console.log(color); // 1

// Enum com valores personalizados:

enum Status {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

const taskStatus: Status = Status.COMPLETED;

console.log(taskStatus);
console.log(Status);

// Une com o outro cores
enum Colors {
  PURPLE = 'PURPLE',
  PINK = 200,
  YELLOW = 1000,
}

console.log(Colors);
console.log(Colors.YELLOW); // 1000
console.log(Colors.RED); // 0
