import java.sql.Connection;
import java.sql.PreparedStatement;

public class ClienteDAO {

    public boolean registrarCliente(Cliente cliente) {
        String sql = "INSERT INTO cliente (nombre, apellido, correo_electronico, contraseña, direccion) VALUES (?, ?, ?, ?, ?)";

        try (Connection conn = Conexion.conectar();
                PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, cliente.getNombre());
            stmt.setString(2, cliente.getApellido());
            stmt.setString(3, cliente.getCorreo());
            stmt.setString(4, cliente.getContraseña()); // encripta si usas hash
            stmt.setString(5, cliente.getDireccion());

            int filas = stmt.executeUpdate();
            return filas > 0;

        } catch (Exception e) {
            System.out.println("❌ Error al registrar cliente: " + e.getMessage());
            return false;
        }
    }
}
