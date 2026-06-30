package week1.SingletonPatternExample;

public class Logger {
    private static Logger loggerInstance;
    private Logger(){
        System.out.println("Instance for logger has been created");
    }

    public static Logger getInstance(){
       if(loggerInstance==null){
           loggerInstance=new Logger();
       }
       return loggerInstance;
    }
    public void log(String message){
        System.out.println("LOG: "+message);
    }
}
