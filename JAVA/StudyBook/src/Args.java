public class Args {
    public static void main(String[] args) {
        if(args != null){ // if(args != null)을 해주어야 매개변수가 없을 때도 실행할 수 있음
            System.out.println("매개변수의 개수:"+args.length);
            for (int i=0; i< args.length; i++){
                System.out.println("args["+i+"] = \""+ args[i] + "\"");
            }
        }
    }
}