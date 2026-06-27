package week1.SingletonPatternExample;

public class TestSingleton {
    public static void main(String[] arg){
        Logger logger1=Logger.getInstance();
        logger1.log("First message");
        Logger logger2=Logger.getInstance();
        logger2.log("Second message");

        System.out.println("Are both instance same?");

        if(logger1==logger2){
            System.out.println("YES - Only one instance exists");
        }
        else{
            System.out.println("NO - More than one instance exists");
        }
    }
}
