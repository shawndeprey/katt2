using UnityEngine;
using System;

public class SpriteAnimation : MonoBehaviour
{
    public Sprite[] animations;
    public bool loop;
    public float frameTime;

    private int totalFrames;
    private int currentFrame = 0;
    private float accumulator = 0;
    private Action UpdateAction;
    private SpriteRenderer spriteRenderer;
    

    void Start()
    {
        totalFrames = animations.Length;

        currentFrame = UnityEngine.Random.Range(0, totalFrames);
        spriteRenderer = GetComponent<SpriteRenderer>() as SpriteRenderer;

        if (loop)
        {
            UpdateAction = Loop;
        }
        else
        {
            UpdateAction = Once;
        }
    }

    void Update()
    {
        accumulator += Time.deltaTime;
        if (accumulator >= frameTime)
        {
            accumulator -= frameTime;
            UpdateAction();
        }
    }

    private void Loop()
    {
        currentFrame = (currentFrame < totalFrames - 1) ? currentFrame + 1 : 0;
        spriteRenderer.sprite = animations[currentFrame];
    }

    private void Once()
    {
        if (currentFrame < totalFrames - 1)
        {
            currentFrame++;
        }

        spriteRenderer.sprite = animations[currentFrame];
    }
}
