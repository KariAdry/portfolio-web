/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yoprogramo.mavenproject1;

import java.util.Scanner;


public class NewMain {

    private static int i;

    public static void main(String[] args) 
    {
        int vector[] = new int[10];

        Scanner teclado = new Scanner (System.in);

        for (int i=0; i<vector.length; i++)
        {
            System.out.println ("Ingrese el valor parta el indice " + i);
            vector[i]=teclado.nextInt();
        }  

        for (int i=0; i<vector.length; i++)
        {
            System.out.println("Estoy en el indice " + i);
            System.out.println("Estoy guardando un " +vector[i]);
        }
    
    } 
}

