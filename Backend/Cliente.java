public class Cliente {
    private String nombre;
    private String apellido;
    private String correo;
    private String contraseña;
    private String direccion;

    public Cliente(String nombre, String apellido, String correo, String contrasena, String direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contrasena;
        this.direccion = direccion;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getCorreo() {
        return correo;
    }

    public String getContraseña() {
        return contraseña;
    }

    public String getDireccion() {
        return direccion;
    }
}
