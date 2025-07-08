import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ClienteDAO dao = new ClienteDAO();

        System.out.println("📋 Registro de nuevo cliente:");

        System.out.print("Nombre: ");
        String nombre = sc.nextLine();

        System.out.print("Apellido: ");
        String apellido = sc.nextLine();

        System.out.print("Correo: ");
        String correo = sc.nextLine();

        System.out.print("Contraseña: ");
        String contrasena = sc.nextLine();

        System.out.print("Dirección: ");
        String direccion = sc.nextLine();

        Cliente cliente = new Cliente(nombre, apellido, correo, contrasena, direccion);

        if (dao.registrarCliente(cliente)) {
            System.out.println("✅ Cliente registrado exitosamente.");
        } else {
            System.out.println("❌ Error al registrar el cliente.");
        }

        sc.close();
    }
}
