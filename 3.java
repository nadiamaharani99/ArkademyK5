public class arkademy {
  public static void main(String[] args) {
    for(int i = 1; i <= 100; i++) {
      if (((i % 3) == 0) && ((i % 7) == 0))
        System.out.print("arkademy  
      else if ((i % 3) == 0) 
      	System.out.print("arka     
      else if ((i % 7) == 0) 
      	System.out.print("demy     
      else System.out.print(i);
      	System.out.print(" ");
    }
    	System.out.println();
  }
}